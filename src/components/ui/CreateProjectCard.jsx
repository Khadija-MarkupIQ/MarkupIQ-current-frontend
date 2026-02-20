
import fileimg from '../assets/files.png'
import menuimg from '../assets/ellipsis-vertical.png'
import { inter } from "..//..//app/layout.js"

const CreateProjetCard = (props) => {
    return (
        <div className='border rounded-md sm:rounded-xl 
       flex flex-col justify-center items-center text-[#1E1E1E]'>
            {/* <div className=''> */}
            <div className='px-1 py-1 sm:px-2 sm:py-2'>
                <img src={props.img} className='' />
                <p className={`${inter.className} flex text-[4px] sm:text-[16px] sm:gap-0 justify-between font-bold mt-0.5 sm:mt-2`}>{props.heading}<img src={menuimg.src} className='h-1 w-1 sm:h-7 sm:w-7' /></p>
                <p className='text-[5px] sm:text-[14px] mt-0.5 sm:mt-2'>Created {props.date}</p>
                <p className='text-[5px] sm:text-[14px] flex mt-0.5 sm:mt-2'><img src={fileimg.src} className='w-2 h-2 sm:w-4 sm:h-4' />{props.filecount}</p>
                <button className='px-1 py-1 sm:px-6 sm:py-2 font-inter text-[5px] sm:text-[12px] rounded-sm sm:rounded-lg border-none sm:mt-2' style={{
                    backgroundColor: props.button === "Draft" ?
                        "#D1D5DB" : props.button === "Completed" ? "#4CAF50" : "#3B82F6",
                    color: props.button === "Draft" ? "#1E1E1E" : "#FFFFFF"
                }}>{props.button}</button>
                {/* <div> */}</div>

            {/* </div> */}


        </div>
    )
}

export default CreateProjetCard
