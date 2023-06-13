
let student=document.querySelector('.container');

for(let i=0;i<30;i++){
    let containerStudentInfo = document.createElement('div');
    containerStudentInfo.classList.add('containerStudentInfo');

    let el=document.createElement('div');
    el.classList.add('studentname');    
    containerStudentInfo.appendChild(el);

    let el1=document.createElement('div');
    el1.classList.add('markscontainer');  
    containerStudentInfo.appendChild(el1);

    for(let i=0;i<34;i++){
        let el3=document.createElement('div');
        el3.classList.add('block');    
        el1.appendChild(el3);
    }


    student.appendChild(containerStudentInfo);
    

}

