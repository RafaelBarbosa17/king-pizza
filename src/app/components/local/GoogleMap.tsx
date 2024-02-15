const GoogleMap = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14906.883634254287!2d-43.6157577!3d-20.9235453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3cde2951aeae5%3A0x3be9f6132db20f2e!2sKing%20Pizza!5e0!3m2!1spt-BR!2sbr!4v1691761525473!5m2!1spt-BR!2sbr"
        className="h-[100%] max-h-[400px] w-[90%] rounded-lg md:h-[80%] md:w-[80%]"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMap
