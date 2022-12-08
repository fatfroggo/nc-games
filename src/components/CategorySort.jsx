import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCategories } from "../api";

const CategorySort = ({setSelectedCategory, selectedCategory}) => {

  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleCategoryChange = (event) => {
    if(!event.target.value) {
      navigate("/")
      setSelectedCategory("")
    }
    else {
        setSelectedCategory(event.target.value)
        setSearchParams({ category: event.target.value })
    }
    }

    useEffect(() => {
        getCategories().then((categories) => {
            setCategories(categories)
            if(searchParams.get("category")) {
              setSelectedCategory(searchParams.get("category"))
            }
        })
    }, [])

    return (
      <select
        name="category-list"
        className="category-list"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">
          -- Category --
        </option>

        {categories.map((category) => {
          return (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          );
        })}
      </select>
    );

}

export default CategorySort