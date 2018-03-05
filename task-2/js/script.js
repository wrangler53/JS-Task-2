let skillsArr = [];

// Skill constructor;
class Skill {
    constructor(skillName, skillRange) {
        this.skillName = skillName,
        this.skillRange = skillRange
    }
}

// Get data and create skill 
$('#add-skill-btn').click(() => {
    let skillName = $('#skill-name').val();
    let skillRange = +$('#skill-range').val();

    skillsArr.push(new Skill(skillName, skillRange));

    sortSkills(skillsArr);
    buildRange();
})

// Sort skills by descending
function sortSkills(arr) {
    arr.sort((obj1, obj2) => {
        return obj2.skillRange - obj1.skillRange;
    })
}

// Build range of skills
function buildRange() {
    $('.skill-range-container').html('');

    skillsArr.forEach(item => {
        $('.skill-range-container').html(
            $('.skill-range-container').html() + 
            `<div class="skill-item" style="width: ${item.skillRange}%">
                <span class="skill-item-name">
                    ${item.skillName}
                </span>
            </div>`
        );
    })
}