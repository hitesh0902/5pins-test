const initialState = {
  meeting: [
    {
      id: 1,
      date: "10 Dec 2020 at 11 AM",
      status: false,
      user: "Person1",
      talkingPoints: [{ id: 1, point: "Do some talking" }],
      pendingActionItems: [{ id: 1, action: "Do some action" }],
      notes: [{ id: 1, desc: "Write some notes" }],
    },
    {
      id: 2,
      date: "12 Dec 2020 at 11 AM",
      status: false,
      user: "Person2",
      talkingPoints: [{ id: 2, point: "Do some talking" }],
      pendingActionItems: [{ id: 2, action: "Do some action" }],
      notes: [{ id: 2, desc: "Write some notes" }],
    },
    {
      id: 3,
      date: "14 Dec 2020 at 11 AM",
      status: false,
      user: "Person3",
      talkingPoints: [{ id: 3, point: "Do some talking" }],
      pendingActionItems: [{ id: 3, action: "Do some action" }],
      notes: [{ id: 3, desc: "Write some notes" }],
    },
    {
      id: 4,
      date: "16 Dec 2020 at 11 AM",
      status: true,
      user: "Person4",
      talkingPoints: [{ id: 4, point: "Do some talking" }],
      pendingActionItems: [{ id: 4, action: "Do some action" }],
      notes: [{ id: 4, desc: "Write some notes" }],
    },
  ],
};

function meetingReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default meetingReducer;
