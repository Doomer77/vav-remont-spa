import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import './Works.css'
import work1 from '../../work-1.jpg'
import work2 from '../../work-2.jpg'
import work3 from '../../work-3.jpg'
import work4 from '../../work-4.jpg'
import work5 from '../../work-5.jpg'
import work6 from '../../work-6.jpg'

const Works = () => {
    const [modal, setModal] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = imgSrc => {
        setTempImgSrc(imgSrc)
        setModal(true)
    }
    return (
        <>
            <div className={modal ? 'modal open' : 'modal'}>
                <img src={tempImgSrc} alt="" />
                <CloseIcon onClick={() => setModal(false)} />
            </div>
            <section className="works-wrapper">
                <div className="container">
                    <div className="works-heading">Наши работы:</div>
                    <div className="row d-flex justify-content-around mb">
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work1}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work1)}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work2}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work2)}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work3}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work3)}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around">
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work4}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work4)}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work5}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work5)}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 work">
                            <img
                                src={work6}
                                alt=""
                                className="work-image"
                                onClick={() => getImg(work6)}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works
