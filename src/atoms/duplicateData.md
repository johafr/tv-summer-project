//From atoms/story

export const deleteMessage = (
messageIndex: number,
pagenumber: number,
page: messageProps[],
currentStory: Story
) => {
// Remove the message (object) from the sublist (page[])
const updatedMessagelist = [
...page.slice(0, messageIndex),
...page.slice(messageIndex + 1),
];
// Replace the sublist (page[]) in the parent list (pages[][])
const updatedPagesList = [
...currentStory.pages.slice(0, pagenumber),
updatedMessagelist,
...currentStory.pages.slice(pagenumber + 1),
];
const newStory = { ...currentStory, pages: updatedPagesList };
return newStory;
};

export const createNewPage = (currentStory: Story) => {
const newPages = [...currentStory.pages, []];
const newStory = { ...currentStory, pages: newPages };
return newStory;
};

export const deletePage = (
currentStory: Story,
pageToBeDeleted: messageProps[]
) => {
return currentStory.pages.length === 1
? { ...currentStory, pages: [[]] }
: {
...currentStory,
pages: currentStory.pages.filter((page) => page !== pageToBeDeleted),
};
};

// Attempt at making updates for every instance of the person that had a color change.
export const updatePersonColor = (
oldPerson: Person,
newPerson: Person,
story: Story
) => {
const totalPages = story.pages.length;
//let updatedStoriesList: messageProps[][];
//let updatedMessagesList: messageProps[];

for (let i = 0; i < totalPages; i++) {
for (let j = 0; j < story.pages[i].length; j++) {
if (story.pages[i][j].person?.id === oldPerson.id) {
console.table(story.pages[i][j].person);
}
}
}
return story;
};

export const getDisplayScreenLength = selector<number>({
key: "getDisplayScreenLength",
get: ({ get }) => {
const displayed = get(story);
return displayed.pages.length;
},
});

export const numWordsInStory = selector<number>({
key: "numWordsInStory",
get: ({ get }) => {
var wordCount: number = 0;
const currentStory = get(story);
currentStory.pages.forEach((page) => {
page.forEach((message) => {
const words = message.content.split(" ");
wordCount += words.length;
});
});
return wordCount;
},
});
