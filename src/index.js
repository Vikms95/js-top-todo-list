// import renderViewTodo from './view/renderViewTodo';

// import todosStorage from './logic/objectsStorage';

import { renderViewHome } from './view/renderViewHome'
import renderViewStaticElements from './view/renderViewStaticElements'
import {fetchObjecsFromLocalStorage} from './logic/insertElements'
// const contentReference = document.getElementById('content')


fetchObjecsFromLocalStorage()
renderViewStaticElements()
renderViewHome()


