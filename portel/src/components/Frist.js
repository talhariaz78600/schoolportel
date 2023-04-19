import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import noteContext from '../context/portels/portelContext';
function Frist() {
    const use=useContext(noteContext);
    const {fristpage,fff}=use;
    const [frist, fristp] = useState({ heading: "", para: "" })
    const [im, img] = useState({ Image: "" })
    const onchange = (e) => {
        fristp({ ...frist, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        fristpage(im.Image,frist.heading,frist.para);
        // console.log(fff.photof)
    }
    const onimage = async (e) => {
        const file = e.target.files[0];
        const based64 = await convertTobased64(file);
        img({ ...im, Image: based64 });

    }
    return (
        <div style={{backgroundImage: `url(${fff.photof}) ` , backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
            <div className="container" >
                <div className="row">
                    <h4 className='text-center'>Enter the Activites</h4>
                    <div className="col-12 mt-1">
                        <form onSubmit={submit} className="row gx-3 gy-2 align-items-center">
                            <div className="col-sm-3">
                                <input type="file" className="form-control-file border" id="Image" accept="image/png, image/jpeg" name='Image' onChange={(e) => onimage(e)} />

                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control mt-3" id="heading" name="heading" placeholder="Enter the heading" onChange={onchange} />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control mt-3" id="para" name="para" placeholder="Enter paragraph" onChange={onchange} />
                            </div>


                            <div className="col-auto">
                                <button type="submit mt-1" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frist
function convertTobased64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
