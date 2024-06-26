import Tarot from '@/assets/siteindex.png'
import Alen from '@/assets/hypnosisalen.png'
import My from '@/assets/mywebsite.png'
import Blog from '@/assets/blogprogramiranje.png'

export default {
    data() {
        return {
            websites: [
                {
                    id: 1,
                    name: 'Hypnosis Studio Alen',
                    description: 'Website about hypnosis and hypnotherapy.',
                    technology: 'WordPress, Elementor',
                    img: Alen,
                    goTo: 'https://hypnosisstudioalen.si/'
                },
                {
                    id: 2,
                    name: 'Tarot Zate',
                    description: 'Website about spiritual and personal growth through tarot, meditation and much more',
                    technology: 'Vue 3, Python Flask for Server Side, Heroku',
                    img: Tarot,
                    goTo: 'https://www.tarot-zate.si'
                },
                {
                    id: 3,
                    name: 'My portfolio',
                    description: 'Website about what i do and what I did.',
                    technology: 'Vue 3, Node.js, GitHub API, Express.js, Three.js, Photoshop, Heroku',
                    img: My,
                    goTo: 'https://www.danilojezernik.com'
                },
                {
                    id: 4,
                    name: 'My blog about programming',
                    description: 'Blog about programming in python and JavaScript.',
                    technology: 'Python, Flask, JavaScript, CSS, Heroku',
                    img: Blog,
                    goTo: 'https://blog.danilojezernik.com'
                }
            ]
        }
    }
}
