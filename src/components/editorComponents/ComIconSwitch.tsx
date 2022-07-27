import React from "react";
import { CommunicationCategory } from "../../atoms/template";

import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import MessageIcon from "@mui/icons-material/Message";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
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
            return <FormatAlignCenterOutlinedIcon/>
        case "DIALOG":
            return <ForumIcon/>
        case "TEXTMESSAGE":
            return <MessageIcon/>
        case "THOUGHT":
            return <PsychologyOutlinedIcon/>
        case "SHOUT":
            return <CampaignIcon/>
        default:
            return (
                <ArticleIcon/>
                )
    }



}