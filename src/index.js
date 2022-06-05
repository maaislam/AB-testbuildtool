// Test import of a JavaScript module
import { example, testingSetup } from '@/js/example'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'
console.log('agdhsfip if aof a')

const app = document.querySelector('#MainContent') || document.querySelector('#app-container')
app.innerHTML = ''
app.append(logo, heading, imageBackground, imagePublic)

testingSetup('hahahahahah')
