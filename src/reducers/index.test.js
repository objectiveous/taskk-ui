import rootReducer from './index';

//describe('>>>TILE REDUCER', () => {
//
//  it('initializes an issue', () => {
//    const stateBefore = {};
//    const stateAfter = {
//      tile: {
//        issueId: '',
//        title:'',
//        description:'',
//        author:'',
//        assignee: ''
//      }
//    };
//
//    const action = {type: 'UPDATE_ISSUE'};
//
//    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
//  });
//
//  it('updates an issue', () => {
//    const stateBefore = {
//      tile: {
//        issueId: '123',
//        title:'',
//        description:'',
//        author:'',
//        assignee: ''
//      }
//    };
//    const stateAfter = {
//      tile: {
//        issueId: '123',
//        title:'testTitle',
//        description:'',
//        author:'',
//        assignee: ''
//      }
//    };
//    const action = { type: 'UPDATE_ISSUE', issueObj: { title: 'testTitle'}};
//
//    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
//
//  })
//
//
//});
//
describe('>>>PHASE REDUCER', ()=>{
  it('creates a new issue', () => {
    const stateBefore = {
      column: []
    }
    const stateAfter = {
      column: [
        {
          issueId: '',
          title:'',
          description:'',
          author:'',
          assignee: ''
        }
      ]
    };
    const action = {type: 'CREATE_ISSUE'};

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);

  });
  it('deletes an issue', () => {
    const stateBefore = {
      column: [
        {
          issueId: '123',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '456',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '789',
          title:'',
          description:'',
          author:'',
          assignee: ''
        }
      ]
    };
    const stateAfter = {
      column: [
        {
          issueId: '123',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '789',
          title:'',
          description:'',
          author:'',
          assignee: ''
        }
      ]
    };
    const action = {type: 'DELETE_ISSUE', issueId: '456'};

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('inserts an issue', () => {
    const io = {
      issueId: '456',
      title:'',
      description:'',
      author:'',
      assignee: ''
    };
    const stateBefore = {
      column: [
        {
          issueId: '123',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '789',
          title:'',
          description:'',
          author:'',
          assignee: ''
        }
      ]
    };
    const stateAfter = {
      column: [
        {
          issueId: '123',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '456',
          title:'',
          description:'',
          author:'',
          assignee: ''
        },
        {
          issueId: '789',
          title:'',
          description:'',
          author:'',
          assignee: ''
        }
      ]
    };
    const action = {type: 'INSERT_ISSUE', issueId: '789', issueObj: io};
    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });
})


