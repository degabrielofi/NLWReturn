import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();




const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
     

      await expect(submitFeedback.execute({
           type: 'BUG',
           comment: 'Example comment',
           screenshot: 'data:image/png;base64,35842435782311',
       })).resolves.not.toThrow();

       expect(createFeedbackSpy).toHaveBeenCalled();
       expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {  
 
       await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,35842435782311',
        })).rejects.toThrow();
     });

     it('should not be able to submit feedback without comment', async () => {
     
        await expect(submitFeedback.execute({
             type: 'BUG',
             comment: '',
             screenshot: 'data:image/png;base64,35842435782311',
         })).rejects.toThrow();
      });

      it('should not be able to submit feedback with an invalid screenshot', async () => {
     
 
        await expect(submitFeedback.execute({
             type: 'BUG',
             comment: 'Está tudo bugado!!!',
             screenshot: 'screenshot_website.jpg',
         })).rejects.toThrow();
      });

     
})