import { useEffect, useState } from "react";
import { getCategories } from "../api";

const CategorySort = ({setSelectedCategory}) => {

    const [categories, setCategories] = useState([])

    

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories)
        })
    }, [])

    return (
      <select
        name="category-list"
        className="category-list"
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        {categories.map((category) => {
            return <option key={category.slug} value={category.slug}>{category.slug}</option>
        })}
      </select>
    );

}

export default CategorySort