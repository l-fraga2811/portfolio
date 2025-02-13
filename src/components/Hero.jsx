/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/***********
 * IMPORTS *
 ***********/
import perfImg from "../images/avatar-1.jpg"

const Hero = () => {
    return (
        <section
            id=""
            className="">
            <div className="">
                <div>
                    <div className="">
                        <figure className="">
                            {/************************
                             * TODO-TROCAR AVATAR *
                             ************************/}
                            <img
                                src={perfImg}
                                width={40}
                                height={40}
                                alt="Perf img"
                                className="img-cover" 
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero