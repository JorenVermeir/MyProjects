<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<jsp:include page="header.jsp">
<jsp:param value="Home" name="pageTitle"/>
</jsp:include>

<img src="${pageContext.request.contextPath}/./images/logoSmall.PNG" alt="Sifaka logo" class="img-responsive center-block">
<h1><spring:message code="label.Welcome"/></h1>
<p><spring:message code="label.lang"/></p>
<p><a href="?lang=nl">Nederlands</a></p>
<p><a href="?lang=en">English</a></p>
<jsp:include page="footer.jsp"></jsp:include>
