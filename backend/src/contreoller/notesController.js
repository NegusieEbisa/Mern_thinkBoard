import Notes from "../models/Notes.js";
export const  getAllNotes= async (req,res)=>{
 try {
    const notes=await Notes.find().sort({createdAt:-1});
    res.status(200).json(notes);
 } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({msg:"Internal Server Error", error:error.message});
    
 }
}
export const geNotesById=async (req,res)=>{
    try {
        const notes=await Notes.findById(req.params.id)
        if(!notes) return res.status(404).json({message:"not found"})
        res.json(notes)
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error", error:error.message});
     
    }
}
export const createNotes=async (req,res)=>{
    try {
        const {title,content}=req.body
        const newNote=new Notes({title,content})
        await newNote.save()
        res.status(201).json({message:"created successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const updateNotes=async (req,res)=>{
   try {
    const {title,content}=req.body
    const updated=await Notes.findByIdAndUpdate(req.params.id,{title,content},{
        new:true
    })
    if(!updated) return res.status(404).json({message:"not foud "})
    res.status(200).json({updated})
   } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
   }
}
export const deleteNotes=async(req,res)=>{
   try {
    const deleted=await Notes.findByIdAndDelete(req.params.id)
    if(!deleted) return res.json({messsage:"deleted sucessfully"})
   } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
   }
}