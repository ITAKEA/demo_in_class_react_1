
import React, { useState, useEffect } from 'react';

function SubmitForm() {
    const [inputValue, setInputValue] = useState('jahgdashjgdg');
    //const inputValue = '';

    function handleChange(e) {
        setInputValue(e.target.value);
        console.log(inputValue);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted with:', inputValue);
    }

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Indsend</button>
                </div>
            </form>
    );
}

export default SubmitForm;