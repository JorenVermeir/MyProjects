<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<<jsp:include page="header.jsp">
    <jsp:param name="title" value="User Overview" />
    <jsp:param name="pageName" value="StreepjesApp | edit person" />
</jsp:include>

<form:form method = "POST" action = "${pageContext.request.contextPath}/person/edit.htm" modelAttribute = "person">
    <form:hidden path="id"/>
    <p class="form-group">
        <label for="totem" class="control-label"> Totem:</label>
        <form:input id = "totem" path="totem"/>
        <form:errors path="totem" cssClass="error"/>
    </p>
    <p class="form-group">
        <label for="firstName" class="control-label"><spring:message code="label.firstname" />:</label>
        <form:input id="firstName" path="firstName"/>
        <form:errors path="firstName" cssClass="error"/>
    </p>
    <p class="form-group">
        <label for="lastName" class="control-label"><spring:message code="label.lastname" />:</label>
        <form:input id="lastName" path="lastName"/>
        <form:errors path="lastName" cssClass="error"/>
    </p>
    <p>
        <input id="save" type="submit" class="btn btn-default" value="Save">
    </p>
</form:form>

<jsp:include page="footer.jsp"></jsp:include>