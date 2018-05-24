<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<jsp:include page="header.jsp">
    <jsp:param value="title" name="StreepjesApp | add streepje"/>
</jsp:include>

<form:form method="POST" action="${pageContext.request.contextPath}/streepje/new.htm" novalidate="novalidate" modelAttribute="streepje">
    <!-- novalidate in order to be able to run tests correctly -->
    <form:hidden path="userid" id="userid"/>
    <form:hidden path="date" id="date"/>
    <p class="form-group">
        <label for="quantity" class="control-label"> <spring:message code="label.quantity" />:</label>
        <form:input id = "quantity" path="quantity"/>
        <form:errors path="quantity" cssClass="error"/>
    </p>
    <p>
        <input type="submit" id="save" value="Save">
    </p>
</form:form>

<jsp:include page="footer.jsp"></jsp:include>