import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

    const dispatch = useDispatch();
    
    const {active:note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset ] = useForm(note);
    const { id, body, title } = formValues;

    const activeId = useRef(); //permite guardar una variable mutable sin redibujar

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    useEffect(() => {
        
        dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    typr="text"
                    placeholder="Some awesome title"
                    name="title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body} 
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    (note.url) 
                    &&
                    (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }
            </div>

            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
                
        </div>
    )
}
