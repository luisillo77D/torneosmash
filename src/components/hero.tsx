
export default function Hero(){
    return(
        <div className="h-1/2 md:h-5/6 relative">
            <div className="h-full">
                <img src="/images/fondo.webp" className="h-full object-cover md:object-fill md:h-full md:w-full" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-center w-3/4 gap-5">
                <h1 className="text-4xl font-extrabold">Super Smash Bros Tournament</h1>
                <div className="flex">
                </div>
                <div className="flex gap-2">
                <svg className="w-6 h-6 inline-block self-center" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h1 className="text-base font-medium">23 Octubre 9AM</h1>
                </div>
                <div className="flex gap-2">
                <svg className="w-6 h-6 inline-block self-center" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffffZ"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <h1 className="text-base font-medium">Domo UES</h1>
                </div>
                <a href="https://forms.gle/2AvngHjbyfN35KAS9" target="_blank" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full"><svg className="w-6 h-6 inline-block self-center" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>Inscribirse aquí</a>
                <div className="flex gap-2 items-center">
                    
                    <div className="bg-zinc-50 text-slate-900 rounded-lg px-5 py-2 font-bold text-3xl">
                        <h1>23</h1>
                        <h3 className="text-base font-medium text-red-500">Oct</h3>
                    </div>
                    <div className="flex flex-col font-bold text-3xl "><h1>-</h1></div>
                    <div className="bg-zinc-50 text-slate-900 rounded-lg px-6 py-2 font-bold text-3xl">
                        <h1>9</h1>
                        <h1 className="text-base font-medium text-red-500">A.M</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
