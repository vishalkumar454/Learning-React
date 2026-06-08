import React from "react";
import { useState } from "react";

export default function ChangeColorButton({bgcolor , colorName , setColor}){

    return (
        <>
        <button 
        onClick={() => setColor(bgcolor)}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
        style={{background : bgcolor}}>{colorName}</button>
        </>
    )
}