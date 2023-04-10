import React,{useState, useEffect} from 'react'
import "./slider.css"
import data from "../../data"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Slider = () =>{
    const [people] = useState(data);
    const[index,setIndesx] = useState(0);

    useEffect(() => {
        const lastIndex = people.length -1;
        if(index < 0){
            setIndesx(lastIndex);
        }
        if(index > lastIndex){
            setIndesx(0);
        }
    },[index,people]);

    useEffect(() =>{
         let Slider = setInterval(() => {
            setIndesx(index +1)
         }, 5000);
         return () => {
            clearInterval(Slider)
         }
    },[index])
    return (
        <section className= "section">
        <div className='title'>
            <h2 className='title'>
My Clients </h2>
        </div>
        <div className='section-center'>
            {people.map((iteam,indexPeople)=> {
                const {id,image,name,title} = iteam;
                let position = "nextSlide";
                if(indexPeople === index ){
                    position = "secondSlide"
                }
                if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length -1)){
                    position = "lastSlide"
                }
                return (
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img"/>
                        <h2>{name}</h2>
                        <p className='title'>{title}</p>
                    </article>
                )
            })}
            <button className='prev' onClick={() => setIndesx(index -1)}>
            <FontAwesomeIcon icon = {faChevronLeft} className="fa-regular fa-chevron-left"></FontAwesomeIcon>
            </button>
            <button className='next' onClick={() => setIndesx(index + 1)}> 
            <FontAwesomeIcon icon = {faChevronRight} className="fas fa-arrow-right-up"></FontAwesomeIcon>
            </button>
        </div>
        </section>
    );
};

export default Slider
