import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const configuration = new Configuration({
  organization: "org-lXw4hj89Ee5eiGCV8QqYPRV2",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors());

// Handler for coaching conversations
app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  const conversation = [
    { role: "system", content: "You are a executive coaching assistant that will help employees improve their work performance through goal setting and action planning on the platform. You will answer the users platform related questions." },
    ...messages,
  ];

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: conversation,
  });

  const response = completion.data.choices[0].message;

  res.json({
    response,
  });
});

// Handler for personalized recommendations
app.post("/recommendations", async (req, res) => {
  const { preferences } = req.body;

  // Use user preferences to generate personalized recommendations
  const personalizedRecommendations = await generatePersonalizedRecommendations(preferences);

  res.json({
    recommendations: personalizedRecommendations,
  });
});

// Function to generate personalized recommendations
async function generatePersonalizedRecommendations(preferences) {
  // Extract preferences from the preferences object
  const { interests, goals, historicalData } = preferences;
  
  // Perform necessary calculations or data processing based on user preferences
  // For example, you can use machine learning algorithms or recommendation engines
  // Customize the logic based on your data and requirements
  
  // Sample logic for generating personalized recommendations based on preferences
  let recommendations = [];

  // Example: Web Development recommendations for users interested in Web Development
  if (interests.includes("Web Development")) {
    recommendations.push({ title: "Web Development 101", category: "Web Development" });
    recommendations.push({ title: "Advanced Front-End Technologies", category: "Web Development" });
  }

  // Example: Leadership recommendations for users interested in Leadership
  if (interests.includes("Leadership")) {
    recommendations.push({ title: "Leadership Mastery", category: "Leadership" });
  }

  // Example: Data Science recommendations for users interested in Data Science
  if (interests.includes("Data Science")) {
    recommendations.push({ title: "Data Science Fundamentals", category: "Data Science" });
  }

  // Add more recommendation logic based on user goals, completed courses, historical data, etc.

  // Sort recommendations based on user goals
  recommendations.sort((a, b) => {
    // Custom sorting logic based on user goals
    // Adjust the logic based on your specific requirements
    const aGoalMatch = goals.includes(a.category);
    const bGoalMatch = goals.includes(b.category);

    if (aGoalMatch && !bGoalMatch) {
      return -1;
    } else if (!aGoalMatch && bGoalMatch) {
      return 1;
    } else {
      return 0;
    }
  });

  // Sort recommendations based on historical data (e.g., completed courses)
  recommendations.sort((a, b) => {
    // Custom sorting logic based on historical data
    // Adjust the logic based on your specific requirements
    const aCompleted = historicalData.completedCourses.includes(a.title);
    const bCompleted = historicalData.completedCourses.includes(b.title);

    if (aCompleted && !bCompleted) {
      return 1;
    } else if (!aCompleted && bCompleted) {
      return -1;
    } else {
      return 0;
    }
  });

  return recommendations;
}

app.post("/analyze-goal", async (req, res) => {
  const { sessionName, oldRecords } = req.body;

  // Analyze session name and old records to generate a goal statement
  const goalStatement = await analyzeGoal(sessionName, oldRecords);

  res.json({
    goalStatement,
  });
});

// Function to analyze user goal based on session name and old records
async function analyzeGoal(sessionName, oldRecords) {
  // Perform analysis based on session name and old records
  // Customize the logic based on your data and requirements

  // Example: Extract keywords from session name and old records to generate a goal statement
  const keywords = sessionName.split(" ").concat(oldRecords);
  const goalStatement = `Based on your session name and old records, your goal seems to be focused on ${keywords.join(", ")}.`;

  return goalStatement;
}

app.listen(port, () => {
  console.log(`Coaching Assistant is listening at http://localhost:${port}`);
});