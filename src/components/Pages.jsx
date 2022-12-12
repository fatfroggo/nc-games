const Pages = ({page, setPage, reviewsList, selectedCategory}) => {

    const handleBack = () => {
        if(page > 1) setPage(page -= 1)
    }

    const handleNext = () => {
        if(!selectedCategory && reviewsList.length === 10) {
            setPage(page += 1)
        }
    }

return (
  <>
    <button className="button" onClick={handleBack}>Back</button>
    <button className="button" onClick={handleNext}>Next</button>
  </>
);

}

export default Pages;