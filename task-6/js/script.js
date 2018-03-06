const FIREBASE_ROOT = firebase.database().ref();

// Get data from Firebase
FIREBASE_ROOT.child('Education').once('value').then((success) => {
    buildTable(success.val());
});

// Build table
function buildTable(data) {
    console.log(data);

    data.forEach(item => {
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
    })
}