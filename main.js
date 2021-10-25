const linksSociaMedia = {
  github: 'thomasfrankliyn',
  youtube: '/channel/UCG6j0V1f2sqLYDWEXbNGf5w',
  facebook: 'thomasfrankliyn.senasantos',
  instagram: 'thomasfrankliyn',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSociaMedia[social]}`
  }
}

changeSocialMediaLinks()


//Função para Consumir API do Github

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSociaMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGithubProfileInfos()