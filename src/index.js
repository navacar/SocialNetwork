import './index.css';
import State, { ChangeNewPostText } from './State/State';
import {addPost} from './State/State';
import { rerenderEntireTree } from './render';

rerenderEntireTree(State, addPost, ChangeNewPostText)