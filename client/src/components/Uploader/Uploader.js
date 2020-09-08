import React, {useRef} from 'react';

export const Uploader = () => {

    const inputRef = useRef(null)

   const handleSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(); 
     
        // Update the formData object 
        formData.append( 
          "file", 
          inputRef.current.files[0],
          
        ); 
        await fetch("http://localhost:5000/upload", {
            method: 'POST',
            body: formData
        })
       
      }; 
    
      
    
    return <div> 
    <h2>Upload a txt file</h2>
          <form  
          onSubmit={handleSubmit}
			id='uploadForm' 
			action='/upload' 
			method='post' 
			encType="multipart/form-data">
				<input type="file" ref={inputRef} name="sampleFile" />
				<input type='submit' value='Upload!' />
		</form>	
    </div>
}
