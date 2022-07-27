import React from "react";
import { CommunicationCategory } from "../../atoms/template";

import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import MessageIcon from "@mui/icons-material/Message";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CampaignIcon from '@mui/icons-material/Campaign';

// Component props
type Props = {
    category : CommunicationCategory
};

// Component wrapper function
export const ComIconSwitch: React.FC<Props> = ({ category  }) => {

    // Component end-return
    switch(category.interactionName) {
        case "NARRATIVE":
            return <ArticleIcon/>
        case "DIALOG":
            return <ForumIcon/>
        case "TEXTMESSAGE":
            return <MessageIcon/>
        case "THOUGHT":
            return <BubbleChartIcon/>
        case "SHOUT":
            return <CampaignIcon/>
        default:
            return (
                null
                )
    }



}