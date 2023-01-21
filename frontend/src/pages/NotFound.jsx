function NotFound() {
  return(
      <div className='mt-[30vh] md:h-screen md:w-full bg-gray'>
        <div className="text-center">
          <img 
            className="ml-auto mr-auto w-[30vw]" 
            src="https://maiasura.com/components/frontend/assets/images/404.gif" 
            alt="404 imagem"
          />
          <h1 className="font-roboto text-2xl"> PAGINA NÃO ENCONTRADA :( </h1>
        </div>
      </div>
  );
}

export default NotFound;