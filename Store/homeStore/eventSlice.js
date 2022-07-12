import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	eventData: [],
	planEventId: "",
	guestData: [],
	taskData: [],
	notesData: [],
	budgetData: {
		numberOfGuestsExpected: "",
		pricePerPlate: "",
		drinksPricePerPerson: "",
		venueCost: "",
		decorations: "",
		transportations: "",
		mc: "",
		photography: "",
		marketing: "",
		totalBudget: 0,
	},
};

const eventSlice = createSlice({
	name: "reducer for event actions",
	initialState,
	reducers: {
		getEventData: (state, actions) => {
			state.eventData = actions.payload;
		},
		activePlanEventId: (state, actions) => {
			state.planEventId = actions.payload;
		},
		deactivePlanEventId: (state, actions) => {
			state.planEventId = "";
		},
		getGuestData: (state, actions) => {
			state.guestData = actions.payload;
		},
		removeGuesData: (state, actions) => {
			state.guestData = [];
		},
		getTaskData: (state, actions) => {
			state.taskData = actions.payload;
		},
		removeTaskData: (state, actions) => {
			state.taskData = [];
		},
		getNotesData: (state, actions) => {
			state.notesData = actions.payload;
		},
		getBudgetData: (state, actions) => {
			state.budgetData = actions.payload;
		},
		deleteBudgetData: (state, actions) => {
			state.budgetData = initialState.budgetData;
		},
		saveFromFoodBudget: (state, actions) => {
			state.budgetData.numberOfGuestsExpected =
				actions.payload.numberOfGuestsExpected;
			state.budgetData.pricePerPlate = actions.payload.pricePerPlate;

			state.budgetData.totalBudget =
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.pricePerPlate) +
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.drinksPricePerPerson) +
				Number(state.budgetData.venueCost) +
				Number(state.budgetData.transportations);
		},
		saveFromDrinksBudget: (state, actions) => {
			state.budgetData.drinksPricePerPerson =
				actions.payload.drinksPricePerPerson;

			state.budgetData.totalBudget =
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.pricePerPlate) +
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.drinksPricePerPerson) +
				Number(state.budgetData.venueCost) +
				Number(state.budgetData.transportations);
		},
		saveDecorationsBudget: (state, actions) => {
			state.budgetData.decorations = state.actions.payload;
		},
		saveMarketingBudget: (state, actions) => {
			state.budgetData.marketing = actions.payload.marketing;
		},
		saveMcBudget: (state, actions) => {
			state.budgetData.mc = actions.payload.mc;
		},
		savePhotographyBudget: (state, actions) => {
			state.budgetData.photography = actions.payload.photography;
		},
		saveVenueBudget: (state, actions) => {
			state.budgetData.venueCost = actions.payload.venueCost;

			state.budgetData.totalBudget =
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.pricePerPlate) +
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.drinksPricePerPerson) +
				Number(state.budgetData.venueCost) +
				Number(state.budgetData.transportations);
		},
		saveTrasnportationBudget: (state, actions) => {
			state.budgetData.transportations = actions.payload.transportations;

			state.budgetData.totalBudget =
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.pricePerPlate) +
				Number(state.budgetData.numberOfGuestsExpected) *
					Number(state.budgetData.drinksPricePerPerson) +
				Number(state.budgetData.venueCost) +
				Number(state.budgetData.transportations);
		},
	},
});

export const {
	getEventData,
	activePlanEventId,
	deactivePlanEventId,
	getGuestData,
	removeGuesData,
	getTaskData,
	removeTaskData,
	getNotesData,
	getBudgetData,
	deleteBudgetData,
	saveDecorationsBudget,
	saveFromDrinksBudget,
	saveFromFoodBudget,
	saveMarketingBudget,
	saveMcBudget,
	savePhotographyBudget,
	saveTrasnportationBudget,
	saveVenueBudget,
} = eventSlice.actions;

export default eventSlice.reducer;
