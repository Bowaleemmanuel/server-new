import Category from "../models/categoryModel.js";
//import Category from "../models/categoryModel.js";
import CatchAsync from "../utils/CatchAsync.js";


export const createCategory = CatchAsync(async(req, res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.json({error:"Name is required"});
        }
        const existingCategory = await Category.findOne({name})
        if(existingCategory){
            return res.json({error:"Category already exists"});
        }

        const newCategory = await new Category({name}).save();
        res.status(201).json({message:"Category created successfully", data:newCategory})

    }catch(error){
        console.log(error);
        throw new Error(error.message);
    } 
});

//create crud for categories


//update category
export const updateCategory = CatchAsync(async (req,res) =>{
    try{
        const {name} = req.fields;
        switch(true){
            case !name:
                return res.json({error:"Name is required"});
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {...req.fields},
            {new:true}
        );
        await updatedCategory.save();
        res.status(200).json(updatedCategory);
    }catch(error){
        console.log(error);
        res.status(400).json(error.message)
    }
})

//delete category


//get all categories

//get category by id