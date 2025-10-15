import pandas as pd

# Load the CSV file
df = pd.read_csv('Orders.csv')

# Remove duplicate rows
df = df.drop_duplicates()

# Standardize text formatting for specific columns
text_columns = ['Customer Name', 'Category', 'Sub Category', 'City']
for col in text_columns:
    if col in df.columns:
        df[col] = df[col].str.title()

# Handle missing values for numeric columns
numeric_columns = ['Sales', 'Discount', 'Profit']
for col in numeric_columns:
    if col in df.columns:
        df[col] = df[col].fillna(0)

# Handle missing values for all columns
for col in df.columns:
    if df[col].isnull().any():
        print(f"Null values found in column: {col}")
        if df[col].dtype == 'object':
            # Fill missing values with 'Unknown' for text columns
            df[col] = df[col].fillna('Unknown')
        else:
            # Fill missing values with 0 for numeric columns
            df[col] = df[col].fillna(0)

# Verify that there are no null values remaining
if df.isnull().any().any():
    print("Warning: Null values are still present in the dataset.")
else:
    print("No null values in the dataset.")

# Save the cleaned dataset
df.to_csv('Orders_Cleaned.csv', index=False)

print("Preprocessing complete. Cleaned data saved as 'Orders_Cleaned.csv'.")
