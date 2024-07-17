import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update = () => {

    const { eventId } = useParams()
    const { register, handleSubmit, setvalue } = useForm()

    const navigate = useNavigate()
    async function getdata() {
        const result = await axios.get(`http://localhost:8080/events/${eventId}`)
        setvalue("id", result.data.id)
        setvalue("name", result.data.name)
        setvalue("date", result.data.date)
        setvalue("loc", result.data.loc)
        setvalue("des", result.data.des)
    }
    useEffect(() => {
        getdata()
    }, [])

    function savedata(data) {
        axios.put(`http://localhost:8080/events/${eventId}`, data)
        alert("data updataded")
        navigate("/show")
    }

    return (
        <>
            <form onSubmit={handleSubmit(savedata)}>
                <section className="h-100 bg-info bg-gradient ">
                    <div className="container h-100 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4 mb-0 mt-3">
                                    <div className="row g-0 mb-0 bg-info">

                                        <div className="col-xl-6 mb-0 bg-secondary bg-gradient">
                                            <div className="card-body  text-black">



                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="tel" id="form3Example1m" className="form-control form-control-lg" {...register('id')} />
                                                            <label className="form-label" for="form3Example1m">ID</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('name')} />
                                                            <label className="form-label" for="form3Example1m">Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="date" id="form3Example1n" className="form-control form-control-lg" {...register('date')} />
                                                            <label className="form-label" for="form3Example1n">Date</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('loc')} />
                                                            <label className="form-label" for="form3Example1n">Location</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('des')} />
                                                            <label className="form-label" for="form3Example1n">Description</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-6 '>
                                                    <button type="submit" className="btn btn-warning btn-lg ms-2 ">Submit form</button>
                                                </div>





                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

        </>
    )
}
export default Update;