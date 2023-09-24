import React, { ChangeEventHandler, useState } from "react";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  SelectChangeEvent,
  Card,
  CardContent,
  Box,
  Badge,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material";

const suggestionsData = [
  {
    id: 1,
    title: "Предложение 1",
    description: "Это предложение 1",
    tags: [1, 2],
    status: 1,
    popularity: 10,
  },
  {
    id: 2,
    title: "Предложение 2",
    description: "Это предложение 2",
    tags: [3],
    status: 2,
    popularity: 5,
  },
];

const tagsOptions = [
  { id: 1, label: "Тег1" },
  { id: 2, label: "Тег2" },
  { id: 3, label: "Тег3" },
];

const statusOptions = [
  { id: 1, label: "Открыто" },
  { id: 2, label: "Закрыто" },
];

const sortOptions = [
  { id: "популярности", label: "Популярности" },
  { id: "другой-вариант", label: "Другой вариант сортировки" },
];

export function HomePage() {
  const [filterTags, setFilterTags] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortType, setSortType] = useState("популярности");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterTagsChange = (event: SelectChangeEvent) => {
    setFilterTags(event.target.value);
  };

  const handleFilterStatusChange = (event: SelectChangeEvent) => {
    setFilterStatus(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value);
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSuggestions = suggestionsData.filter((suggestion) => {
    return true;
  });

  filteredSuggestions.sort((a, b) => {
    if (sortType === "популярности") {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <Container sx={{ py: 8 }}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained">Добавить</Button>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Список предложений
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
        </Grid>
        <Grid item xs={12} md={9}>
        </Grid>
      </Grid>
    </Container>
  );
}
