import React, { Component } from 'react'
import ContentBox from '../Components/ContentBox';
import ContentBoxII from '../Components/ContentBoxII';
import  CardContent from '../Components/CardContent';
class About extends Component {

    render() {
        return (
            <div>
                <div className="container" style={{
                    backgroundImage: `url(${'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'})`, maxWidth: '100%', backgroundAttachment: 'fixed',
                    backgroundPosition: 'center', opacity: 0.79,
                    backgroundSize: 'cover', padding: '20%', width: '100%', height: '100%'
                }}>
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            <h1 style={{ fontSize: '50px' }}>We Change Everything WordPress </h1>
                            <p>This is the only WordPress theme you will ever want to use.</p>
                        </div>
                        <div className="col-md-6  col-12 text-center text-white mt-5">
                            <button type="button" className="btn btn-primary" style={{ width: '240px', height: '60px' }}>Read more</button>

                        </div>
                        <div className="col-md-6  col-12 text-center  mt-5 ">
                            <button type="button" className="btn" style={{ width: '240px', height: '60px', borderColor: '#fff', color: '#fff' }}>Primary</button>

                        </div>
                    </div>

                </div>
                <div className="container my-5 text-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="display-4">
                                Hello My Clone Theme
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="lead">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </div>
                        </div>
                    </div>
                    <ContentBox ImageSrc="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                    textContent="
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    "/>
                
                    <ContentBoxII ImageSrc="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    textContent="
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    "/>

                <ContentBox ImageSrc="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                    textContent="
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                "/>
                </div>
                <div className="container">
                <div className="row">
                    <CardContent title="Contrary to popular" sTitle="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                imgSrc="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                                
                    <CardContent title="Contrary to popular" sTitle="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                imgSrc="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                                
                    <CardContent title="Contrary to popular" sTitle="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                imgSrc="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                                
            </div>
            </div>
            </div>
        )
    }
}

export default About;
