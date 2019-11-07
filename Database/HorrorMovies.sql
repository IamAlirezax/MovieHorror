USE [master]
GO
/****** Object:  Database [HorrorMovies]    Script Date: 07/11/2019 16:22:44 ******/
CREATE DATABASE [HorrorMovies]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'The Movie', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\The Movie.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'The Movie_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\The Movie_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [HorrorMovies] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HorrorMovies].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HorrorMovies] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HorrorMovies] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HorrorMovies] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HorrorMovies] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HorrorMovies] SET ARITHABORT OFF 
GO
ALTER DATABASE [HorrorMovies] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [HorrorMovies] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HorrorMovies] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HorrorMovies] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HorrorMovies] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HorrorMovies] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HorrorMovies] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HorrorMovies] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HorrorMovies] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HorrorMovies] SET  DISABLE_BROKER 
GO
ALTER DATABASE [HorrorMovies] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HorrorMovies] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HorrorMovies] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HorrorMovies] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HorrorMovies] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HorrorMovies] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HorrorMovies] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HorrorMovies] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [HorrorMovies] SET  MULTI_USER 
GO
ALTER DATABASE [HorrorMovies] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HorrorMovies] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HorrorMovies] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HorrorMovies] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HorrorMovies] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [HorrorMovies] SET QUERY_STORE = OFF
GO
USE [HorrorMovies]
GO
/****** Object:  Table [dbo].[accesstokens]    Script Date: 07/11/2019 16:22:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accesstokens](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[token] [varchar](max) NOT NULL,
	[expires] [datetime] NOT NULL,
	[created] [datetime] NOT NULL,
 CONSTRAINT [PK_accesstokens] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[booking]    Script Date: 07/11/2019 16:22:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[booking](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[movieId] [int] NOT NULL,
	[userid] [int] NOT NULL,
	[tickets] [int] NOT NULL,
	[created] [datetime] NOT NULL,
 CONSTRAINT [PK_booking] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[movies]    Script Date: 07/11/2019 16:22:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[movies](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[movieid] [varchar](50) NOT NULL,
	[salong] [varchar](50) NOT NULL,
	[maxseats] [int] NOT NULL,
	[date] [datetime] NOT NULL,
 CONSTRAINT [PK_movies] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 07/11/2019 16:22:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](500) NOT NULL,
	[password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[accesstokens] ADD  CONSTRAINT [DF_accesstokens_created]  DEFAULT (getdate()) FOR [created]
GO
ALTER TABLE [dbo].[booking] ADD  CONSTRAINT [DF_booking_created]  DEFAULT (getdate()) FOR [created]
GO
ALTER TABLE [dbo].[booking]  WITH CHECK ADD  CONSTRAINT [FK_booking_movies] FOREIGN KEY([movieId])
REFERENCES [dbo].[movies] ([id])
GO
ALTER TABLE [dbo].[booking] CHECK CONSTRAINT [FK_booking_movies]
GO
ALTER TABLE [dbo].[booking]  WITH CHECK ADD  CONSTRAINT [FK_booking_user] FOREIGN KEY([userid])
REFERENCES [dbo].[user] ([id])
GO
ALTER TABLE [dbo].[booking] CHECK CONSTRAINT [FK_booking_user]
GO
USE [master]
GO
ALTER DATABASE [HorrorMovies] SET  READ_WRITE 
GO
