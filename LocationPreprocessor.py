import pandas as pd

# Load the CSV file
df = pd.read_csv('Locations.csv')

# Display basic information
print("Initial Dataset Information:")
print(df.info())

# Remove duplicate rows
df = df.drop_duplicates()

# Handle missing values in all columns
df.fillna({'City': 'Unknown', 'State': 'Unknown', 'Region': 'Unknown'}, inplace=True)

# Resolve inconsistent 'Region' values for the same city
df['Region'] = df.groupby('City')['Region'].transform(lambda x: x.mode()[0] if not x.mode().empty else x)

# Standardize text formatting
df['City'] = df['City'].str.title()
df['State'] = df['State'].str.title()
df['Region'] = df['Region'].str.title()

# Check if there are any null values left
if df.isnull().any().any():
    print("Warning: Null values are still present in the dataset.")
else:
    print("No null values in the dataset.")

# Save the cleaned dataset
df.to_csv('Locations_Cleaned.csv', index=False)

print("Preprocessing complete. Cleaned data saved as 'Locations_Cleaned.csv'.")
