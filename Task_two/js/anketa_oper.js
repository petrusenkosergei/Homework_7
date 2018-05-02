function Form() {
    var name = document.getElementById('addSurnameNameMiddlename');
    var firstName = document.getElementById('SureName');
    var secondName = document.getElementById('Name');
    var thirdName = document.getElementById('Patronymic');
    name.innerHTML = ' ' + firstName.value + ' ' + secondName.value + ' ' + thirdName.value;
    var age = document.getElementById('addAgeYears');
    var realAge = document.getElementById('Age');
    age.innerHTML = realAge.value;
    var ageDay = document.getElementById('addAgeDays');
    ageDay.innerHTML = realAge.value * 365;

    var gender = document.getElementById('addGender');

    (document.getElementById('GenderMan').checked)?
        gender.innerHTML = 'Man':
        (document.getElementById('GenderWoman').checked)?
            gender.innerHTML = 'Women': '';

    var retiremehtAgeWoman  = 55;
    var retiremehtAgeMan = 60;
    var haveAge = document.getElementById('addRetirementAge');

    ((document.getElementById('GenderMan').checked) && (realAge.value < retiremehtAgeMan))?
        haveAge.innerHTML = ' ' + 'not a pensioner':
        ((document.getElementById('GenderMan').checked) && (realAge.value >= retiremehtAgeMan))?
            haveAge.innerHTML = ' ' + 'pensioner':
            ((document.getElementById('GenderWoman').checked) && (realAge.value < retiremehtAgeWoman))?
                haveAge.innerHTML = ' ' + 'not a pensioner':
                haveAge.innerHTML = ' ' + 'pensioner';
}
addForm.addEventListener('click', Form, false);