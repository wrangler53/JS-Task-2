const FIREBASE_ROOT = firebase.database().ref();

 /* !! Without infinite scroll !! */
// Get data from Firebase
// FIREBASE_ROOT.once('value').then((success) => {
//     buildTable(success.val());
// }).catch((error) => {
//     console.log(error);
// });

// Build table
// function buildTable(data) {
//     data.forEach(item => {
//         $('.item-container').html(
//             $('.item-container').html() + 
//             `<div class="item">
//                 <div class="item-line">
//                     <div class="item-date">${item.date}</div>
//                 </div>
//                 <div class="item-body">
//                     <div class="item-header">${item.title}</div>
//                     <div class="item-text">${item.someText}</div>
//                 </div>
//             </div>`
//         );
//     })
// }

 /* !! With infinite scroll !! */
let start = 0;
let orderRef = FIREBASE_ROOT.orderByKey().startAt(start.toString()).endAt((start + 4).toString());

// Build table
function buildTable(item) {
    $('.item-container').html(
        $('.item-container').html() + 
        `<div class="item">
            <div class="item-line">
                <div class="item-date">${item.date}</div>
            </div>
            <div class="item-body">
                <div class="item-header">${item.title}</div>
                <div class="item-text">${item.someText}</div>
            </div>
        </div>`
    );
}

// First get data
orderRef.once('value').then((success) => {
    success.forEach(item => buildTable(item.val()));
}).catch((error) => {
    console.log(error);
});

// Check for scroll, get next 5 elements
$('.item-container').scroll(() => {
    if ($('.item-container').scrollTop() + $('.item-container').innerHeight() >= $('.item-container').prop('scrollHeight')) {
        start += 5;
        
        // create new ref for scroll (get 5 elements)
        let orderRef = FIREBASE_ROOT.orderByKey().startAt(start.toString()).endAt((start + 4).toString());

        orderRef.once('value').then((success) => {
            success.forEach(item => buildTable(item.val()));
        }).catch((error) => {
            console.log(error);
        });
    }
});