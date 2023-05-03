import React from 'react'

function FooterPokedex() {
  return (
    <div className='h-[290px] min-w-screen bg-black mt-[40px] flex justify-center items-end pb-8'>

<div className='grid justify-items-center gap-10 text-yellow-200'>
      <div className='w-[40%] grid '>
        <img src="/images/construccion.png" alt="" />
        <div className='grid justify-center'>
        <h3 className='text-[20px]'>ZONE UNDER</h3>
        <p className='text-[30px]'>CONSTRUCTION</p>
        </div>
      </div>

<div className=' min-[550px]:flex min-[550px]:gap-10 min-[750px]:justify-center min-[750px]:gap-[100px]  min-[550px]:w-[80%] min-[550px]:align-start min-[550px]:justify-items-end '>
      <div className='text-white flex gap-2 items-center '>
      <i class='bx bx-envelope'></i>
      <p>vazquez.roo93@gmail.com</p>
      </div>
      <div className='text-white flex gap-2 items-center'>
      <i class='bx bx-phone' ></i>
      <p>(653) 100-7177</p>
      </div>

      </div>
      </div>
      {/* <div className='text-white grid '>
        <h3>Send me a message</h3>
        <div className='flex gap-3'>
        <input type="text" className='w-[200px] '/>
        <button>Send</button>
        
        </div>
      </div> */}
      <div className='fixed bottom-0 left-0 ml-10  mb-[10px] mr-[10px]'>
      <a href="https://wa.me/526531007177" className='w-[40px] h-[40px] rounded-full bg-green-600 grid justify-center items-center' >
      <i class='bx bxl-whatsapp w-[50px] h-[50px] rounded-full text-white text-[54px] -mt-[6px] -ml-[4px]' ></i>
      </a>
      </div>


      {/* <form action="" className='text-white gap-2 grid w-[240px]'>


        <div className='gap-2 flex w-[100%] justify-between'>
        <label htmlFor="">Name </label>
        <input type="text"  className='w-[180px] text-black'/>
        </div>

        <div className='gap-2 flex  w-[100%] justify-between'>
        <label htmlFor="">Email</label>
        <input type="text" className='w-[180px]  text-black' />
        </div>

        <div>
          <h3>Message</h3>
          <input type="text"  className='w-[100%] h-[100px]  text-black'/>
        </div>
        <div className=' justify-self-end'>
          <button className='bg-blue-500 w-[100px]' >Send</button>
        </div>

      </form> */}

{/* <form action="">
<div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-[1px] rounded-sm ${ errors.first_name ? 'bg-red-400' : 'bg-gray-100'} p-1`}
            type="text" {...register("first_name", {required:'Este campo es requerido'})}
            id="first_name"
          />
          <span className="text-[10px]">{errors.first_name && errors.first_name.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="last__name">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-[1px] rounded-sm ${ errors.last_name ? 'bg-red-400' : 'bg-gray-100'} p-1`}
            type="text" {...register("last_name", {required:'Este campo es requerido'})}
            id="last__name"
          />
          <span className="text-[10px]">{errors.last_name && errors.last_name.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
          placeholder="ejemplo@gmail.com"
            className={`border-[1px] rounded-sm ${ errors.email ? 'bg-red-400' : 'bg-gray-100'} p-1 text-center ${ errors.password ? 'placeholder:text-white/30' : 'placeholder:text-black/30'}`}
            type="email" {...register("email", {required:'Este campo es requerido'})}
            id="email"

          />
          <span className="text-[10px]">{errors.email && errors.email.message}</span>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="image">
            URL image
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="text" {...register("image_url",
           { pattern:{
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
              message: "url no valida"
            }
          }
  )}
            id="image"
          />
          <span>{errors.image_url && errors.image_url.message}</span>
        </div>
        
</form>
      */}
      </div>
      
      

  )
}

export default FooterPokedex