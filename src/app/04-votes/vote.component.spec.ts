import { VoteComponent } from "./vote.component";

describe('VoteComponent', ()=>{
    let component: VoteComponent;

    beforeEach(()=>{
        component = new VoteComponent();
    })

    //afterEach
    //beforeAll
    //afterAll

    it('should increment vote when upvoted', ()=>{
        component.upVote();
        expect(component.votes).toBe(1);
    })

    it('should increment vote when downvoted', ()=>{
    
        component.downVote();
        expect(component.votes).toBe(-1);
    })
})