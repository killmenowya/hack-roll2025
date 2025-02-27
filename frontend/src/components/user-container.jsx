import React, { useState } from "react";
import { AppBar, Container, Divider, Stack, Toolbar, Typography, Box, CircularProgress } from "@mui/material";
import Result from "./analysis-result/result";
import UploadContainer from "./input/uploadcontainer";
import { VideoProvider } from "../contexts/VideoContext";

export default function UserContainer() {
      const [apiReturned, setApiReturned] = useState(false);
      const [transcription, setTranscription] = useState("");  // Transcription state
      const [summary, setSummary] = useState(""); // For the huggin face Summary
      const [isLoading, setLoading] = useState(false);

      const handleApiReturn = () => {
        setApiReturned(true);
      };

      return (    
        <VideoProvider>
            <AppBar position="static" sx={{backgroundColor: '#1976d2', padding: '0.5rem' }}>
                <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    bRuDdErS
                </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth={false} sx={{ bgcolor: "lightyellow", display: "flex", flexDirection: "row", height: "100vh" , width: "full"}}>
                <Stack>
                <UploadContainer handleApiReturn={handleApiReturn} setLoading={setLoading} setTranscription={setTranscription} setSummary={setSummary}/>

                {isLoading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                            <CircularProgress />
                        </Box>
                ) : (
                apiReturned && <Result transcription={transcription} summary={summary}/>)}
                </Stack>
            </Container>
        </VideoProvider>
    );
}