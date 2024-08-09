const SectionWrapper = Component =>
  function HOC() {
    return (
      <div className='container'>
        <Component />
      </div>
    )
  }

export default SectionWrapper
