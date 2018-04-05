<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>${param.pageName}</title>
</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="Servlet?action=index">Streepjes App</a>
        </div>
        <ul class="nav navbar-nav">

                <li class=""><a href="${pageContext.request.contextPath}/person.htm">Overview</a></li>

                <li><a href="${pageContext.request.contextPath}/person/new.htm">NewPerson</a></li>

        </ul>
    </div>
</nav>
