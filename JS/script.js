let englishword = ''  
let russianword = ''
let volume = 0
let rightnum = 0
let wrongnum = 0
const xhr = new XMLHttpRequest()

function NewWord() {
    
    xhr.onreadystatechange = function() {
	    
    	if(xhr.readyState == 4 && xhr.status == 200){
	      let res_request = JSON.parse(xhr.responseText)
	      englishword = res_request[1]
        engword.textContent = res_request[1]
	      russianword = res_request[2]
	      rusword.value = '';
	      volume = res_request[0]
	      scope.textContent = `Слов в базе ${volume}`
        }
    }
    
    xhr.open('GET','english.php') // 'http://g92311gz.beget.tech/english.php'
    xhr.send()
}	    

NewWord()

function Check() {
  switch(rusword.value.toLowerCase()){
    case(russianword.toLowerCase()): 
                  rightnum += 1; right.textContent = rightnum
                  rusword.style.borderColor = 'green'; NewWord()
                  percent.textContent = "процент правильных ответов " + Math.round(rightnum*100/(rightnum + wrongnum)) + "%"; break
    case(''): rusword.value = "введите слово"; break
    default: 
             rusword.value = "неправильно, " + russianword 
             wrongnum +=1; wrong.textContent = wrongnum;
             rusword.style.borderColor = 'red';
	           percent.textContent = "процент правильных ответов " + Math.round(rightnum*100/(rightnum + wrongnum)) + "%"; break;
  }
}
 
document.addEventListener( 'keyup', event => {
  if( event.code === 'Enter') Check()
})
document.querySelector('#check').addEventListener('click', Check)

