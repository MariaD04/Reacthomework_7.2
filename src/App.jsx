import { useState } from 'react'
import './App.css'
import videoData from './data/videoData'
import List from './components/List';


export default function App() {
    const [list, setList] = useState(videoData);

    return (
        <List list={list} />
    );
}
