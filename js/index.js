const links = document.querySelectorAll('a');
links[0].textContent = 'MDN';
links[0].href = 'https://developer.mozilla.org';
links[1].textContent = 'Google';
links[1].href = 'https://google.com';
links[2].textContent = 'Microsoft';
links[2].href = 'https://microsoft.com';

const sect = document.querySelector('section');
for (let i = 0; i < 100; i++) {
    const para = document.createElement('p');
    para.textContent = 'Some text ' + i;
    sect.appendChild(para);
}


const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);


// linkPara.parentNode.removeChild(linkPara);
// linkPara.style.color = 'white';
// linkPara.style.backgroundColor = 'black';
// linkPara.style.padding = '10px';
// linkPara.style.width = '250px';
// linkPara.style.textAlign = 'center';
linkPara.classList.add('selected');
