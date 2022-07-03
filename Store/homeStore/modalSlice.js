import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	profileVisible: false,
	createEventVisible: false,
	planningVisible: false,
	guestsVisible: false,
	registerGuestVisible: false,
	notesVisible: false,
	budgetsVisible: false,
	tasksVisible: false,
	remindersVisible: false,
	createInvitationsVisible: false,
	createTaskVisible: false,
	newNoteVisible: false,
	newBudgetVisible: false,
	budgetControl: "",
};

export const modalSlice = createSlice({
	name: "register modals for all home related activites",
	initialState,
	reducers: {
		showProfile: (state, actions) => {
			state.profileVisible = true;
		},
		hideProfile: (state, actions) => {
			state.profileVisible = false;
		},
		showCreateEvent: (state, actions) => {
			state.createEventVisible = true;
		},
		hideCreateEvent: (state, actions) => {
			state.createEventVisible = false;
		},
		showPlanning: (state, actions) => {
			state.planningVisible = true;
		},
		hidePlanning: (state, actions) => {
			state.planningVisible = false;
		},
		showGuests: (state, actions) => {
			state.guestsVisible = true;
		},
		hideGuests: (state, actions) => {
			state.guestsVisible = false;
		},
		showRegisterGuest: (state, actions) => {
			state.registerGuestVisible = true;
		},
		hideRegisterGuest: (state, actions) => {
			state.registerGuestVisible = false;
		},
		showTasks: (state, actions) => {
			state.tasksVisible = true;
		},
		hideTasks: (state, actions) => {
			state.tasksVisible = false;
		},
		showReminders: (state, actions) => {
			state.remindersVisible = true;
		},
		hideReminders: (state, actions) => {
			state.remindersVisible = false;
		},
		showBudgets: (state, actions) => {
			state.budgetsVisible = true;
		},
		hideBudgets: (state, actions) => {
			state.budgetsVisible = false;
		},
		showInvitations: (state, actions) => {
			state.createInvitationsVisible = true;
		},
		hideInvitations: (state, actions) => {
			state.createInvitationsVisible = false;
		},
		showNotes: (state, actions) => {
			state.notesVisible = true;
		},
		hideNotes: (state, actions) => {
			state.notesVisible = false;
		},
		showCreateTask: (state, actions) => {
			state.createTaskVisible = true;
		},
		hideCreateTask: (state, actions) => {
			state.createTaskVisible = false;
		},
		showNewNote: (state, actions) => {
			state.newNoteVisible = true;
		},
		hideNewNote: (state, actions) => {
			state.newNoteVisible = false;
		},
		showNewBudget: (state, actions) => {
			state.budgetControl = actions.payload;
			state.newBudgetVisible = true;
		},
		hideNewBudget: (state, actions) => {
			state.budgetControl = "";
			state.newBudgetVisible = false;
		},
	},
});

export const {
	// showing a modals
	showProfile,
	showCreateEvent,
	showPlanning,
	showGuests,
	showRegisterGuest,
	hideRegisterGuest,
	showBudgets,
	showInvitations,
	showReminders,
	showTasks,
	showNotes,
	showCreateTask,
	showNewNote,
	showNewBudget,

	// hiding modals
	hideNotes,
	hideBudgets,
	hideInvitations,
	hideReminders,
	hideTasks,
	hideCreateTask,
	hideProfile,
	hideCreateEvent,
	hideGuests,
	hidePlanning,
	hideNewNote,
	hideNewBudget,
} = modalSlice.actions;

export default modalSlice.reducer;
