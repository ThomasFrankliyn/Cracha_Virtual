const linksSociaMedia = {
  github: 'thomasfrankliyn',
  youtube: 'maykbrito',
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

}

//getGithubProfileInfos()