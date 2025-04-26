
import { 
  getQuestions, 
  addQuestion, 
  deleteQuestion, 
  updateQuestion 
} from "../controllers/question.controller.js";

const questionRouter = express.Router();

// Route definitions
questionRouter.get("/getQuestions", getQuestions);
questionRouter.post("/addQuestion", addQuestion);
questionRouter.delete("/deleteQuestion/:questionId", deleteQuestion);
questionRouter.put("/updateQuestion/:questionId", updateQuestion);


export { questionRouter };